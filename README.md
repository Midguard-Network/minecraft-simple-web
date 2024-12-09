# Mc Simple Website: Project Overview

All the information for the installation are in the wiki !

Mc Simple Website is a lightweight, feature-rich web platform designed to provide a seamless and immersive experience for Minecraft communities. Built using Angular and Ionic, this project emphasizes simplicity, responsiveness, and customization, making it an ideal solution for managing server interactions and engaging players.

---

## Project Goals

The primary goals of the Mc Simple Website platform include:

- **Enhancing User Engagement**: Provide a dynamic and interactive web interface for players to stay connected with the server.
- **Streamlining Management**: Offer intuitive tools for server administrators to manage content and integrations effortlessly.
- **Customizability**: Allow users to configure the platform to suit their specific needs with adjustable modules and themes.
- **Modern Design**: Deliver a sleek and responsive user experience on all devices.

---

## Key Features

- **Support for Multiple Languages**:
  - Allow users to switch between supported languages seamlessly.
- **Customizable Themes**:
  - Enable creation and selection of unique themes.
- **Staff Page**:
  - Dedicated section to showcase server staff members.
- **Web Map Integration**:
  - Embed and configure server maps, such as BlueMap or DynMap.
- **Welcome Page**:
  - Display a customizable welcome message to users.
- **Discord Widget**:
  - Embed Discord for real-time community interaction.
- **Custom Fonts**:
  - Add and manage fonts to personalize the platform's design.
- **Server Status**:
  - Show real-time Minecraft server status on the home page.

---

## Technologies Used

### **Frontend**

- **Angular Framework**:
  - Built using Angular 19 for a modular structure, scalability, and efficient state management.
  - Leverages Angular’s routing and component-based architecture for dynamic content.
- **Ionic Framework**:
  - Ensures responsive, mobile-friendly designs.
  - Provides native-like UI components for seamless cross-platform compatibility.

### **Build Tools**

- **Node.js**:
  - Utilized for project build processes and local development.

### **Version Control**

- **Git**:
  - Utilized for source code management and collaboration.
  - Project repository hosted on GitHub.

---

## Deployment Options

### **Web Server Installation (Apache, Nginx, etc.)**

1. **Download the Build**:
   - Obtain the **latest build** of the Mc Simple Website from GitHub.

2. **Extract Files**:
   - Extract the content of the `www/browser` folder into the `www` or `html` directory of your web hosting service.

3. **Edit Configuration File**:
   - Navigate to `assets/config` and modify the `config.ts` file to fit your requirements.

4. **Enable Modules**:
   - Configure and activate the modules you wish to use in the application.

5. **Reload**:
   - Refresh your browser to see the applied changes.

### **Docker Installation**

This feature is coming soon. For now, you can:

1. **Customize Locally**:
   - Edit the configuration file on your local machine.

2. **Build Docker Image**:
   - Build a custom Docker image using the modified files.

3. **Deploy**:
   - Deploy the Docker container on your server.

---

## Future Roadmap

- **Official Docker Images**:
  - Provide pre-configured Docker images for streamlined setup.
- **Performance Optimization**:
  - Enhanced caching and asset delivery for faster load times.
- **Extended Features**:
  - Add support for new integrations and customization options.
- **Community Contributions**:
  - Open-source contributions for expanding platform functionality.
