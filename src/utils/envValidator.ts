export const envValidator = (env: string[]) => {
  const missingVars = env.filter((varName) => !process.env[varName]);
  if (missingVars.length > 0) {
    throw new Error(`Missing environment variables ${missingVars.join(", ")}`);
  }
};
