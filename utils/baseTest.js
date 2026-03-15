import { test, expect } from '@playwright/test';
import mysql from 'mysql2/promise';

let connection;

test.beforeAll(async () => {
    console.log('Database configuration');

    connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'd1'
    });
});

test.afterAll(async () => {
    console.log('Database connection closed');
    await connection.end();
});

test.beforeEach(async () => {
    console.log('Login');
});

test.afterEach(async () => {
    console.log('Logout');
});

export { test, expect, connection };