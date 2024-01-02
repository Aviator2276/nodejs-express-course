# Setup MongoDB and Database
### 1. Install MongoDB
Script to install. (For Ubuntu 20.04 LTS Focal)
```bash
#!/bin/bash

sudo apt-get install gnupg curl
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-database hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-mongosh hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
sudo mkdir /data/db
sudo mkdir /data/db
```

### 2. Start MongoDB Server without authentication enabled
Omitting the `--auth` flag so we can create users.
```bash
mongod --bind_ip 0.0.0.0
```
### 3. Login and create root user
Login with MongoSH.
```bash
$ mongosh
```
Switch to the admin database.
```bash
use admin
```
Create a Root account, and enter the password.
```bash
db.createUser(
  {
    user: "root",
    pwd: passwordPrompt(),
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)
```
### 4. Create database and user
Logout of MongoSH.
```bash
exit
```
Terminate the MongoDB Server with `Control + C`.

Start the MongoDB Server with authentication enabled. With the `--auth` flag.
```bash
mongod --bind_ip 0.0.0.0 --auth
```

Then login with the root account. Replace `pass1234` with your actual password
```bash
$ mongosh -u root -p pass1234 --authenticationDatabase admin
```
Switch to the database you're creating. Replace `expressdb` with your database name.
```bash
use expressdb
```
Create the user for this database. Replace with user, password, and database
```bash
db.createUser({user:"<USER>", pwd:"<PASS>", roles:[{role:"dbOwner", db:"<DBNAME>"}]});
```

> Example:
> ```bash
> db.createUser({user:"NodeCourseUser", pwd:"pass1234", roles:[{role:"dbOwner", db:"expressdb"}]});
> ```

### 5. Test the connection and user
Replace with your values
```bash
mongosh -u "NodeCourseUser" -p pass1234 --authenticationDatabase "expressdb"
```