# Secure Note Developer and Testing README
This readme contains important information for getting started within the codebase.

## First-time contributors note

This document contains all the essential information necessary for app operation. It provides detailed insights into any requisite third-party applications that must be installed on your device for seamless functionality.

## Project Mission

Secure Note aims to empower independent artists and producers by providing them with a platform that safeguards their creative works, fosters economic opportunities through a dedicated marketplace, and cultivates a vibrant community for collaboration and networking. Secure Note's goal is to protect the landscape of creativity by ensuring intellectual property protection, manage fair trading of samples, and fostering meaningful connections among Black creators, thereby amplifying their voices and contributions in the global artistic sphere.

## Cloning the Monorepo

If you are already familiar with cloning using the command line and have the correct URL, you can skip this section.

1. Open your Terminal (search for "Terminal" or "Command Prompt" depending on your operating system).
2. Navigate to the directory where you want to clone the repository. Use the command `cd path/to/directory` (replace path/to/directory with the actual path).
3. Run the cloning command: Paste the following command and press Enter:

```bash
   https://github.com/Bison-Hack-Amplify/secure-note.git
   ```

## Database Configuration (Important)
**Please Note: To ensure a smooth development process and prevent potential errors, please complete the database configuration before proceeding further. This is a one-time setup and is required for our app to function**

### Requirements:

Please ensure that you have Postgres and pgAdmin installed on your local machine. These are tools which can be found on the internet once download please proceed.  

### Configuration

## Dependencies and Packages

Secure Note relies on the power of `pnpm` to manage dependencies and packages.

### Installing Dependencies

To install all dependencies, run `pnpm install` from the root directory (`secure-note`).

### Local Dependencies vs. Global Dependencies

Our codebase is a monorepo with different apps, each having its own set of dependencies. Some dependencies are required universally, while others are specific to certain apps. When installing dependencies, it is preferred to install them locally. Refer to the sections below for details.

#### Local Dependencies Installation

To install a new dependency, navigate to the app or package and use the `pnpm install ...` command.

Example: Mariah needs to install a new dependency called 'pkg-b' inside the frontend. She follows these steps:

1. `cd apps/frontend`
2. Run `pnpm i pkg-b`
3. `cd ../..` (to return to the root)

#### Global Dependencies Installation

To install a global dependency, stay inside the root and use the `pnpm install ...` command along with the `--workspace-root` flag.

Example: Doron wants to install TypeScript for the entire monorepo. He follows these steps:

- `pnpm install typescript --workspace-root`

(Note: Without the `--workspace-root` flag, the dependency will not be installed at the root level.)

# Starting Development

- To begin development, simply run the command pnpm dev.

This command will migrate the database (refer to the README in apps/migration for more information) and initiate the Xcode simulator.


