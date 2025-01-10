---
title: 'Managing Remote Containers using Docker Context'
slug: 'managing-remote-containers-using-docker-context'
date: '2025-01-10'
excerpt: 'Managing Docker containers using Docker Context offers better ease of use, consistency, and security.'
image: 'https://raw.githubusercontent.com/farrelnajib/new-portfolio/refs/heads/main/storage/assets/images/cargo-ship.jpg'
keywords: 'docker,container,context,ssh,server,cloud'
---

When working with remote Docker containers, I usually maintain those containers using direct SSH to the remote server. I realized this method is not practical, and I learned a better way to do it. That is **Docker Context**.
___

## What is Docker Context?
Docker Context is a feature that allows you to manage multiple Docker environments from a single Docker CLI. It simplifies switching between local and remote environments without the need to reconfigure the Docker CLI or specify remote hosts repeatedly.

### Why Use Docker Context?
- Ease of use: Seamlessly switch between environments.
- Consistency: Use the same Docker CLI commands for both local and remote containers.
- Security: Avoid exposing raw SSH credentials frequently.
___

## Setting Up Docker Context
Here is how you can set up and use Docker Context

### Prerequisites
- Docker installed in your local machine
- A remote server with Docker installed and SSH access enabled
- User with privileges to manage Docker on the remote server

### Steps to Set Up
#### Setup SSH connection
If you are currently using password for SSH connection, you have to put your machine's **public key** to the `~/.ssh/authorized_keys`
1. **Generate public key and private key on your local machine**
    ```bash
    $ ssh-keygen
    ```
    or
    ```bash
    $ ssh-keygen -C [your-email]
    ```
    ___

    **Expected output**:
    ```bash
    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/[your-username]/.ssh/id_rsa):
    ```

    Press enter to directly save to the default directory.

    **Expected output**:
    ```bash
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    ```
    If you see these output, just press enter to proceed without passphrase

    **Expected output**:
    ```bash
    Your identification has been saved in /Users/[your-username]/.ssh/id_rsa
    Your public key has been saved in /Users/[your-username]/.ssh/id_rsa.pub
    The key fingerprint is:
    SHA256:Pgiq5J7DEn+0wLQgT3ZXNX2L9FkmnXXN9srupBNALXM [your-local-username]@[your-local-host]
    The key's randomart image is:
    +---[RSA 3072]----+
    |         .oo   o*|
    |        . +.E o.O|
    |       . . = + B.|
    |o + . .   . . + .|
    |.B o..  S  . . . |
    |. =... o    . o  |
    |.+.o .. o    o.  |
    |++o o    .  .o.  |
    |++..        .o.  |
    +----[SHA256]-----+
    ```
    ___
2. **Copy the public key**

    In your local computer
    ```bash
    $ cat ~/.ssh/id_rsa.pub
    ```

    **Expected output**
    ```bash
    ssh-rsa AAAAB3NzaC1yc2EAA***56Z2ertsbgLdztHsHGNKZM= [your-local-username]@[your-local-host]
    ```

    ___
3. **Put your local computer's public key to the remote server**

    In your remote server
    ```bash
    $ echo 'ssh-rsa AAAAB3NzaC1yc2EAA***56Z2ertsbgLdztHsHGNKZM= [your-local-username]@[your-local-host]' > ~/.ssh/authorized_keys
    ```
    ___
4. **Verify that your public key is registered in the remote server**

    In your remote server
    ```bash
    $ cat ~/.ssh/authorized_keys
    ```
    **Expected output**
    ```bash
    ssh-rsa AAAAB3NzaC1yc2EAA***56Z2ertsbgLdztHsHGNKZM= [your-local-username]@[your-local-host]
    ```

    With this, we can close the SSH connection to the remote server and no need to connect ever again.
___

#### Set Up Docker Context
1. **Verify Docker installation both in your local computer and remote server**
    ```bash
    $ docker --version
    ```
    **Expected output:**
    ```bash
    Docker version 27.3.1, build ce12230
    ```
    ___

2. **Create a Docker Context**
    ```bash
    $ docker context create [context-name] \
        --docker "host=ssh://[your-remote-user]@[your-remote-ip]"
    ```

    Expected output
    ```bash
    [context-name]
    Successfully created context "[context-name]"
    ```
    ___

3. **List Available Contexts**
    ```bash
    $ docker context ls
    ```
    
    Expected output
    ```bash
    NAME              DESCRIPTION       DOCKER ENDPOINT                                         ERROR
    [context-name]                      ssh://[your-remote-user]@[your-remote-host]
    desktop-linux *   Docker Desktop    unix:///Users/[your-local-user]/.docker/run/docker.sock
    ```

    Notice that there is an asterisk (`*`) besides the `desktop-linux` indicating the active context
    ___

4. **Use a Context / Switching Between Contexts**
    ```bash
    $ docker context use [context-name]
    ```

    Expected output
    ```bash
    NAME              DESCRIPTION       DOCKER ENDPOINT                                         ERROR
    [context-name] *                    ssh://[your-remote-user]@[your-remote-host]
    desktop-linux     Docker Desktop    unix:///Users/[your-local-user]/.docker/run/docker.sock
    ```

    Now all your Docker commands will be executed on your remote server
___

## Practical Example
Imagine we have multiple environment, for example `dev` and `prod`, in separate server. Instead of manually accessing SSH to both server, we can manage those connections using Docker Context.

```bash
# Create development context
docker context create dev --docker "host=ssh://[user]@[dev-host]"
# Create production context
docker context create prod --docker "host=ssh://[user]@[prod-host]"

# Deploy to dev server
docker context use dev
docker-compose up -d

# Deploy to prod server
docker context use prod
docker-compose up -d
```

With this, we can run Docker commands on remote server as if they were local
___

## Final Thoughts
If you frequently switch between local and remote Docker environments or value automation, Docker Context is the way to go. It streamlines workflows and minimizes repetitive tasks. On the other hand, if you’re managing a single server or prefer direct control, SSH may suffice.

For most developers and teams, Docker Context offers a modern and efficient approach to managing remote Docker containers. Give it a try and experience the convenience it brings to your development workflow!