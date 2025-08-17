---
title: "Building a Home Lab with Ansible: Automating My Infrastructure"
date: "2025-08-18"
excerpt: "Automating my home lab with Ansible, learn to set up, configure, and manage Linux and Windows servers efficiently."
difficulty: Intermediate
---

In today’s IT landscape, **automation isn’t optional—it’s essential**. Whether you’re working with cloud-native platforms or managing on-premises servers, tools like **Ansible** help maintain consistency, reduce errors, and save countless hours.  

To deepen my hands-on skills, I built a **home lab environment** where Ansible automates everything from OS configuration to service deployment. Here’s a breakdown of how I set it up and what I learned along the way.  

---

## Why Build a Home Lab?

A home lab gives you the freedom to:
- **Experiment safely** without risking production environments.  
- **Showcase projects** to employers (portfolio-ready).  
- **Learn by doing**: break things, fix them, and document the process.  
- **Practice hybrid workflows** that mirror enterprise IT setups.  

---

## Lab Environment Setup

For my lab, I used a mix of:
- **Hyper-V / VirtualBox VMs** running Ubuntu and Windows Server.  
- **Ansible control node** on Linux.  
- **Target nodes**: a small cluster of Linux and Windows servers for testing.  

Inventory file (`inventory.ini`):

```ini
[linux_servers]
192.168.1.101
192.168.1.102

[windows_servers]
192.168.1.201
```

---

## Automating with Ansible

Here are some of the automation tasks I implemented:  

### 1. Linux Server Hardening
Applied consistent security configurations across all Linux servers:

```yaml
---
- name: Secure Linux servers
  hosts: linux_servers
  become: yes
  tasks:
    - name: Ensure UFW is installed
      apt:
        name: ufw
        state: present
        update_cache: yes

    - name: Enable UFW firewall
      ufw:
        state: enabled
        policy: deny

    - name: Allow SSH
      ufw:
        rule: allow
        port: 22
        proto: tcp
```

---

### 2. Windows Server Automation
Using WinRM, I automated simple tasks like user creation and patching:

```yaml
---
- name: Configure Windows servers
  hosts: windows_servers
  tasks:
    - name: Create a local user
      win_user:
        name: labadmin
        password: StrongP@ssw0rd!
        groups:
          - Administrators
```

---

### 3. Service Deployment
Deployed and managed Nginx across all Linux web servers:

```yaml
---
- name: Install and configure Nginx
  hosts: linux_servers
  become: yes
  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present

    - name: Start and enable Nginx
      service:
        name: nginx
        state: started
        enabled: yes
```

---

## Key Learnings

1. **Agentless simplicity**: No need to install anything on nodes beyond SSH/WinRM.  
2. **Repeatability**: One playbook can configure multiple servers identically.  
3. **Version control matters**: Storing playbooks in GitHub made rollbacks and collaboration easy.  
4. **Hybrid focus**: Automating both Windows and Linux prepared me for real-world enterprise setups.  

---

## What’s Next?

My next steps include:  
- **Integrating Ansible with GitHub Actions** to test playbooks in a CI/CD pipeline.  
- **Expanding my lab** with Docker and Kubernetes for containerized workloads.  
- **Exploring Ansible Galaxy** to reuse community roles.  

---

## Final Thoughts

Building a home lab with Ansible isn’t just an academic exercise, it’s a way to **prove your skills** in automation, configuration management, and DevOps practices.  

I’ve shared some of my playbooks and lab setup on the following [GitHub reppository](https://github.com/letisiapangataa/ansible-home-lab). If you’re learning Ansible, I highly recommend setting up a lab, it’s the best way to gain hands-on experience.  

---

## Disclaimer

This project was developed using a combination of publicly available learning resources, reference books, open source projects, and artificial intelligence tools. All efforts have been made to attribute and comply with relevant licenses. Contributions and insights from the broader open source and educational communities are gratefully acknowledged. This software is provided as-is, without warranty of any kind, express or implied. The author assumes no responsibility for any loss, damage, or disruption caused by the use of this code. It is intended for educational and experimental purposes only and may not be suitable for production environments.
