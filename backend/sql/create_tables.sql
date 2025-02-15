-- Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


-- Roles Table
CREATE TABLE public.roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Users Table
CREATE TABLE public.users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    password_hash TEXT,
    profile_picture TEXT,
    role_id UUID REFERENCES roles(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- OAuth Providers Table
CREATE TABLE public.oauth_providers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    provider VARCHAR(50) NOT NULL,
    provider_id VARCHAR(255) NOT NULL,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(provider, provider_id)
);

-- Sessions Table
CREATE TABLE public.sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    refresh_token TEXT NOT NULL,
    expires_at TIMESTAMP NOT NULL
);

INSERT INTO roles (id, name) VALUES ('38fbd86a-1213-484d-ae12-cd6f37dcb97c', 'Admin');
INSERT INTO roles (id, name) VALUES ('07906948-1268-41c2-9902-ff5e74e569be', 'Seller');
INSERT INTO roles (id, name) VALUES ('3f11c43d-0ca2-409a-9467-5f66523e2b52', 'Customer');
INSERT INTO users (id, email, full_name, password_hash, profile_picture, role_id, created_at, updated_at) VALUES ('ef087ed8-14bd-43c0-b015-ec0874136273', 'user0@example.com', 'User 0', 'hashed_password_0', 'profile_0.jpg', '07906948-1268-41c2-9902-ff5e74e569be', '2025-02-14 07:58:49', '2025-02-14 07:58:49');
INSERT INTO users (id, email, full_name, password_hash, profile_picture, role_id, created_at, updated_at) VALUES ('c68c05ce-87a7-4831-8c5b-52efee3ac4d6', 'user1@example.com', 'User 1', 'hashed_password_1', 'profile_1.jpg', '07906948-1268-41c2-9902-ff5e74e569be', '2025-02-14 07:58:49', '2025-02-14 07:58:49');
INSERT INTO users (id, email, full_name, password_hash, profile_picture, role_id, created_at, updated_at) VALUES ('69c2346c-c546-4917-9d9a-e1f30d023681', 'user2@example.com', 'User 2', 'hashed_password_2', 'profile_2.jpg', '07906948-1268-41c2-9902-ff5e74e569be', '2025-02-14 07:58:49', '2025-02-14 07:58:49');
INSERT INTO users (id, email, full_name, password_hash, profile_picture, role_id, created_at, updated_at) VALUES ('df646ddd-4d5a-47dd-b1c7-c87f27c9b41a', 'user3@example.com', 'User 3', 'hashed_password_3', 'profile_3.jpg', '38fbd86a-1213-484d-ae12-cd6f37dcb97c', '2025-02-14 07:58:49', '2025-02-14 07:58:49');
INSERT INTO users (id, email, full_name, password_hash, profile_picture, role_id, created_at, updated_at) VALUES ('93f8314c-7b18-49ba-b1ba-1fc84ec1df0a', 'user4@example.com', 'User 4', 'hashed_password_4', 'profile_4.jpg', '07906948-1268-41c2-9902-ff5e74e569be', '2025-02-14 07:58:49', '2025-02-14 07:58:49');
INSERT INTO oauth_providers (id, provider, provider_id, user_id) VALUES ('34b90afa-95cc-47ec-be4d-a2bed4c9c245', 'Facebook', '0b96cc19-a590-46f7-a51d-8b6921fae0d4', '93f8314c-7b18-49ba-b1ba-1fc84ec1df0a');
INSERT INTO oauth_providers (id, provider, provider_id, user_id) VALUES ('3e83d34c-b042-42f0-9050-97afd161abdf', 'Google', '4ba2c4b3-cdac-43e1-957f-3c0340397450', 'c68c05ce-87a7-4831-8c5b-52efee3ac4d6');
INSERT INTO oauth_providers (id, provider, provider_id, user_id) VALUES ('e25aef8a-2fb7-4481-b72a-8e4360921ab6', 'Facebook', 'ca730d82-6761-42bd-97e4-f2602728a950', 'c68c05ce-87a7-4831-8c5b-52efee3ac4d6');
INSERT INTO sessions (id, user_id, refresh_token, expires_at) VALUES ('3eeffc49-7483-4cff-a9fc-a1fd8fb93d36', '93f8314c-7b18-49ba-b1ba-1fc84ec1df0a', 'e25ee4e3-c97a-499c-9dfa-8c73b8d0b1c5', '2025-03-07 07:58:49');
INSERT INTO sessions (id, user_id, refresh_token, expires_at) VALUES ('9a5ab6e1-bee3-4fae-92ac-f4e3ad845eb0', 'c68c05ce-87a7-4831-8c5b-52efee3ac4d6', 'ab7563d5-6e87-4a69-a5a9-a041ab9fed17', '2025-02-20 07:58:49');
INSERT INTO sessions (id, user_id, refresh_token, expires_at) VALUES ('067ccd48-a222-4a61-962e-d3f58288e689', '93f8314c-7b18-49ba-b1ba-1fc84ec1df0a', 'd6e2b296-ac36-4898-a35d-4da062330b04', '2025-02-23 07:58:49');