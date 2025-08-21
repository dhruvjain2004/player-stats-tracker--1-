# Player Stats Tracker - Deployment Guide

This guide will help you deploy your Player Stats Tracker application to various platforms.

## Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **MongoDB Atlas Account** - For the database (free tier available)
3. **Node.js** - Version 16 or higher

## Step 1: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Create a database user with read/write permissions
5. Get your connection string
6. Create a database named `player_stats_tracker`

## Step 2: Deploy Backend to Render

### Option A: Render (Recommended - Free Tier)

1. Go to [Render](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `player-stats-tracker-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `backend`

5. Add Environment Variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `NODE_ENV`: `production`
   - `PORT`: `10000`

6. Click "Create Web Service"

### Option B: Railway

1. Go to [Railway](https://railway.app) and sign up
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Set the root directory to `backend`
5. Add environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `NODE_ENV`: `production`

## Step 3: Deploy Frontend

### Option A: Netlify (Recommended - Free)

1. Go to [Netlify](https://netlify.com) and sign up
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: (leave empty)
   - **Publish directory**: `.`

5. Click "Deploy site"

### Option B: Vercel (Free)

1. Go to [Vercel](https://vercel.com) and sign up
2. Click "New Project"
3. Import your GitHub repository
4. Set the root directory to `frontend`
5. Click "Deploy"

### Option C: GitHub Pages (Free)

1. In your GitHub repository, go to Settings → Pages
2. Set source to "Deploy from a branch"
3. Select `main` branch and `/frontend` folder
4. Click "Save"

## Step 4: Update Frontend Configuration

After deploying your backend, you need to update the frontend to use the deployed backend URL:

1. Open `frontend/index.html`
2. Find this line:
   ```javascript
   const backendUrl = "http://localhost:5000";
   ```
3. Replace it with your deployed backend URL:
   ```javascript
   const backendUrl = "https://your-backend-name.onrender.com";
   ```

## Step 5: Test Your Deployment

1. Open your deployed frontend URL
2. Try adding a player
3. Try adding a match
4. Verify data is being saved to MongoDB

## Environment Variables Reference

### Backend (.env file)
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/player_stats_tracker
PORT=5000
NODE_ENV=production
```

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure your backend CORS settings allow your frontend domain
2. **MongoDB Connection**: Verify your connection string and network access settings
3. **Build Failures**: Check that all dependencies are in package.json

### Debug Commands:

```bash
# Check backend logs
npm start

# Test backend locally
curl http://localhost:5000/api/players

# Check MongoDB connection
# Verify your connection string in MongoDB Atlas
```

## Cost Estimation

- **Render Backend**: Free tier (750 hours/month)
- **Netlify Frontend**: Free tier (100GB bandwidth/month)
- **MongoDB Atlas**: Free tier (512MB storage)
- **Total**: $0/month for basic usage

## Next Steps

1. Set up custom domain (optional)
2. Configure SSL certificates (automatic with most platforms)
3. Set up monitoring and logging
4. Implement CI/CD pipeline

## Support

If you encounter issues:
1. Check the platform's documentation
2. Review error logs in your deployment platform
3. Verify environment variables are set correctly
4. Test locally before deploying
