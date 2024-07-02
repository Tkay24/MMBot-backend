module.exports = {
    apps: [{
        name: 'api-blockbounce', // Application name used by PM2
        script: 'app.js', // Entry point script

        // Common settings for all environments
        watch: true, // Enable auto-restart on file changes
        ignore_watch: ["node_modules", "logs"], // Ignore watching certain directories

        // Environment-specific settings
        env: {
            NODE_ENV: 'development',
            PORT: 4444,
            JWT_SECRET: 'BlockBounceSecret',
            JWT_ACCESS_EXPIRATION_MINUTES: 44,
            JWT_REFRESH_EXPIRATION_DAYS: 1,
            JWT_RESET_PASSWORD_EXPIRATION_MINUTES: 44,
            JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: 44,
            SMTP_HOST: '', // Add your SMTP configuration
            SMTP_PORT: 587,
            SMTP_USERNAME: '',
            SMTP_PASSWORD: '',
            EMAIL_FROM: '',
        },
        env_test: {
            NODE_ENV: 'test',
            PORT: 4445,
            JWT_SECRET: 'TestSecret', // Adjust as needed for testing
        },
        env_production: {
            NODE_ENV: 'production',
            PORT: process.env.PORT || 4446,
            JWT_SECRET: process.env.JWT_SECRET, // Use environment variable for security
        },
    }],
};
