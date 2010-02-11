*Note:* The instructions in this guide are designed to get a local copy of
IMathAS up and running quickly, for development. There are inherent security
issues that make them unsuitable for creating any public-facing host. Please see
the [standard instructions](INSTALL.md) for help setting up a production server.

# Linux
## Arch Linux

1. Install XAMPP from [the AUR][0] (either manually, or by your preferred
AUR-helper).
2. [Download IMathAS][1] and unzip it to /opt/lampp/htdocs/.
3. Start XAMPP with `sudo xampp start`.
4. Visit http://localhost/imathas/ (or whatever directory name you used) and
follow the instructions to set up the database and configuration files.
  - The default XAMPP install creates a MySQL user named `root` with no
    password; you'll want to use this information to fill out the field in
    which IMathAS asks for a user account with which to create its own
    (less-priviledged) user.

[0]: http://aur.archlinux.org/packages.php?ID=14141
[1]: http://sourceforge.net/projects/imathas/files/
