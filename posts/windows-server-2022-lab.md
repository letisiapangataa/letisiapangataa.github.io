---
title: "Building a Windows Server 2022 Enterprise Lab with Active Directory, Secure Administration, and Automation"
date: "2025-08-13"
excerpt: "A practical guide to building a Windows Server 2022 lab with AD, RBAC, GPO automation, monitoring, and disaster recovery—powered by PowerShell scripting."
description: "Step-by-step instructions and scripts for creating a secure, automated Windows Server 2022 lab environment for enterprise IT simulation."
difficulty: "Intermediate"
---

Creating a dedicated Windows Server lab is one of the best ways to simulate real-world enterprise IT infrastructure. This guide walks you through the building of a **Windows Server 2022 lab environment** featuring **Active Directory**, **secure RBAC**, **GPO automation**, **monitoring**, and **disaster recovery**—powered by **PowerShell scripting**.

---

## Project Overview

This lab demonstrates:

- **Windows Server 2022 setup** & domain configuration  
- **Active Directory Domain Services (AD DS)** management  
- **Role-Based Access Control (RBAC)** with least privilege  
- **Group Policy Object (GPO) automation** via PowerShell  
- **Real-time monitoring** with alerts  
- **Disaster recovery simulation** with tested backups  

---

## Lab Architecture

![Lab Architecture Diagram](https://github.com/letisiapangataa/windows-server-lab/raw/main/architecture/lab-diagram.png)  

**Servers**  
- **DC01** – Domain Controller & DNS  
- **FILE01** – File Server  
- **APP01** – Application Server  
- **MON01** – Monitoring Server  
- **BACKUP01** – Backup Server  

**Workstations**  
- WS01, WS02, WS03 – Windows 10/11 clients  

---

## Key Features with Real Examples

### 1. Automated User Provisioning
Bulk-create users and assign them to OUs with this script:

```powershell
# Import required modules
Import-Module ActiveDirectory

# Function to generate secure password
function New-RandomPassword {
    param([int]$Length = 12)
    $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
    $password = ""
    for ($i = 0; $i -lt $Length; $i++) {
        $password += $chars[(Get-Random -Maximum $chars.Length)]
    }
    return $password
}
```
[View Full Script](https://github.com/letisiapangataa/windows-server-lab/blob/main/scripts/user-provisioning.ps1)  

---

### 2. RBAC Implementation
From the included [rbac-model.md](https://github.com/letisiapangataa/windows-server-lab/blob/main/docs/rbac-model.md):

- **Domain Admins** → Full control  
- **Helpdesk** → Password resets, basic user management  
- **Staff** → Standard user access  
- **IT Operations** → GPO management, monitoring  
- Delegated OU control for Helpdesk  
- GPO editing restricted to IT Operations  

---

### 3. Group Policy Automation
Automatically create and link security-focused GPOs:

```powershell
function New-GPOIfNotExists {
    param(
        [string]$GPOName,
        [string]$Comment = ""
    )
    try {
        $ExistingGPO = Get-GPO -Name $GPOName -ErrorAction Stop
        Write-Log "GPO already exists: $GPOName"
        return $ExistingGPO
    } catch {
        Write-Log "Creating GPO: $GPOName"
        return New-GPO -Name $GPOName -Comment $Comment
    }
}
```
[View Full Script](https://github.com/letisiapangataa/windows-server-lab/blob/main/scripts/gpo-automation.ps1)  

---

### 4. Monitoring and Alerts
From [monitoring-alert.ps1](https://github.com/letisiapangataa/windows-server-lab/blob/main/scripts/monitoring-alert.ps1):

```powershell
# Function to send email alert
function Send-Alert {
    param(
        [string]$Subject,
        [string]$Body,
        [string]$Priority = "Normal"
    )
    Send-MailMessage -To $EmailTo -From "monitor@lab.local" `
        -Subject $Subject -Body $Body -SmtpServer $SmtpServer `
        -Priority $Priority
}
```

Paired with Task Scheduler, this script can trigger alerts for:  
- Failed logons  
- Privilege changes  
- Service failures  

---

### 5. Disaster Recovery Simulation
From [disaster-recovery.md](https://github.com/letisiapangataa/windows-server-lab/blob/main/docs/disaster-recovery.md):

1. Restore **system state backup** using Windows Server Backup.  
2. Perform **authoritative restore** if AD objects are missing.  
3. Validate AD replication & service health.  
4. Test restores quarterly & log all actions for audit.

---

## Security Best Practices Applied

- **Least Privilege RBAC**  
- **Script-driven user management** to prevent manual errors  
- **Centralised logging** & **alerting**  
- **Regular tested backups**  

---

## Getting Started with the Lab

1. **Set up VMs** in Hyper-V, VMware, or VirtualBox  
2. **Install Windows Server 2022** & workstations  
3. **Configure networking** (static IPs for servers, DHCP for clients)  
4. **Deploy AD DS** on DC01 (`lab.local`)  
5. **Run automation scripts** from `/scripts/`  
6. **Follow monitoring and DR docs** in `/docs/`  

---

## References

- [Microsoft Learn – Windows Server](https://learn.microsoft.com/windows-server)  
- [Active Directory Security Best Practices](https://learn.microsoft.com/windows-server/identity/ad-ds/plan/security-best-practices)  
- [PowerShell Documentation](https://learn.microsoft.com/powershell/)  
