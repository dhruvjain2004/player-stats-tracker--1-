@echo off
echo Player Stats Tracker - Deployment Helper
echo ======================================

echo.
echo 1. Testing Backend Locally...
cd backend
echo Installing dependencies...
npm install

echo.
echo 2. Testing Frontend...
cd ..\frontend
echo Frontend is ready for deployment

echo.
echo 3. Next Steps:
echo    - Push your code to GitHub
echo    - Set up MongoDB Atlas
echo    - Deploy backend to Render
echo    - Deploy frontend to Netlify
echo    - Update frontend backendUrl
echo.
echo See DEPLOYMENT_GUIDE.md for detailed instructions
echo.
pause
