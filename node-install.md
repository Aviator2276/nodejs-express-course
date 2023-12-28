# Installing NPM and NodeJS
Please copy and paste this into the terminal to install NPM & NodeJS onto this workspace.
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install npm -y
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
source ~/.bashrc
nvm install v20.10.0
nvm -v
```
