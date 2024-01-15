import bcrypt from 'bcryptjs';

// SALT should be created ONE TIME upon sign up
const salt = bcrypt.genSaltSync(10);
// example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash

export const hashedPassword = (password: string) => {
  return bcrypt.hashSync(password, salt);
  // hash created previously created upon sign up
};
