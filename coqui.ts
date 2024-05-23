interface User {
  email: string;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

class UserController {
  createUser(user: User): void {
    if (isValidEmail(user.email)) {
      // Logic to add the user to the database
      console.log('User created with email:', user.email);
    } else {
      console.log('Invalid email address:', user.email);
    }
  }

  // Additional methods related to user can be added here
}

// Usage
const userController = new UserController();
userController.createUser({ email: 'example@example.com' });
