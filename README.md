# Minecraft Simple Website Configuration Documentation

This document provides a detailed explanation of the configuration file for Midguard Network. The configuration file contains settings that control the application's behavior, appearance, and integrations.

## Configuration Structure

The configuration file is in JSON format and contains the following sections:

### `app_info`

This section contains information about the application.

- **`name`** *(string)*: The name of the application. Example: `Midguard Network`.
- **`version`** *(string)*: The version of the application. Example: `1.0.0`.

---

### `server_info`

This section defines the Minecraft server details.

- **`ip`** *(string)*: The IP address of the Minecraft server. Example: `play.midguardnetwork.net`.
- **`port`** *(number)*: The port number for the Minecraft server. Example: `25565`.

---

### `theme`

This section specifies theming options for the application.

- **`defaultTheme`** *(string)*: The default theme applied to the application. Example: `Orange`.

---

### `text`

This section allows you to customize text displayed in the application.

- **`welcomeMessage`** *(string)*: A welcome message displayed to users. Example: `"You can welcome the player to your website there."`

---

### `images`

This section configures image settings for the application.

- **`logo`** *(string)*: The URL of the logo displayed in the application. Example: `https://midguardnetwork.com/storage/img/logo.png`.

---

### `discord_module`

This section manages the Discord integration.

- **`enabled`** *(boolean)*: Whether the Discord module is enabled. Example: `true`.
- **`discordID`** *(string)*: The Discord server's ID. Example: `1042193541197209651`.
- **`invitation_link`** *(string)*: The URL to invite users to the Discord server. Example: `""` (empty string if not provided).

---

### `web_map`

This section defines the web map settings.

- **`activated`** *(boolean)*: Whether the web map feature is enabled. Example: `true`.
- **`type`** *(string)*: The type of web map used. Options: `blue-map` or `dyn-map`. Example: `blue-map`.
- **`url`** *(string)*: The URL of the web map. Example: `https://dynmap.midguardnetwork.net/`.

---

### `socials`

This section manages links to social platforms.

Each object in the array has the following properties:

- **`enabled`** *(boolean)*: Whether the social link is displayed. Example: `true`.
- **`icon`** *(string)*: The icon representing the social platform. Example: `logo-youtube`.
- **`url`** *(string)*: The URL to the social platform. Example: `https://www.youtube.com/@MidGuardSmp`.

---

## Example Configuration File

```json
{
   "app_info": {
     "name": "Midguard Network",
     "version": "1.0.0"
   },
   "server_info": {
     "ip": "play.midguardnetwork.net",
     "port": 25565
   },
    "theme": {
      "defaultTheme": "Orange"
    },
    "text": {
        "welcomeMessage": "You can welcome the player to your website there."
    },
    "images": {
        "logo": "https://midguardnetwork.com/storage/img/logo.png"
    },
    "discord_module": {
      "enabled": true,
      "discordID": "1042193541197209651",
      "invitation_link": ""
    },
    "web_map": {
      "activated": true,
      "type" : "blue-map",
      "url": "https://dynmap.midguardnetwork.net/"
    },
    "socials": [
      {
        "enabled": true,
        "icon": "logo-discord",
        "url": ""
      },
      {
        "enabled": true,
        "icon": "logo-github",
        "url": ""
      },
      {
        "enabled": true,
        "icon": "logo-instagram",
        "url": ""
      },
      {
        "enabled": true,
        "icon": "logo-youtube",
        "url": "https://www.youtube.com/@MidGuardSmp"
      },
      {
        "enabled": true,
        "icon": "logo-tiktok",
        "url": ""
      }
    ]
}
```

---

## How to Use

1. **Edit the Configuration File**: Customize the JSON file to match your application's requirements.

2. **Place the Configuration File**: Ensure the file is located at `assets/config/config.json` in your project.

3. **Move Contents**: Drag the contents of the `www/browser` folder into your server's `www` directory.

### Apache Configuration

1. Enable the necessary Apache modules:

   ```bash
   a2enmod rewrite
   a2enmod headers
   ```

2. Update your Apache configuration file (e.g., `/etc/apache2/sites-available/your-site.conf`) with the following:

   ```apache
   <VirtualHost *:80>
       ServerName your-domain.com

       DocumentRoot /path/to/your/app

       <Directory /path/to/your/app>
           Options Indexes FollowSymLinks
           AllowOverride All
           Require all granted
       </Directory>

       ErrorLog ${APACHE_LOG_DIR}/error.log
       CustomLog ${APACHE_LOG_DIR}/access.log combined
   </VirtualHost>
   ```

3. Restart Apache:

   ```bash
   systemctl restart apache2
   ```

### Nginx Configuration

1. Update your Nginx configuration file to include the following:

   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       root /path/to/your/app;
       index index.html;

       location / {
           try_files $uri /index.html;
       }
   }
   ```

2. Restart Nginx:

   ```bash
   systemctl restart nginx
   ```

Ensure your `index.html` file and static assets are in the `/path/to/your/app` directory.

---

For further assistance, please check the [Midguard Network GitHub repository](https://github.com/Midguard-Network/minecraft-simple-web).

