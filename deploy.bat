@echo off
echo ========================================
echo    RiskInsight 自动化部署脚本
echo ========================================
echo.

echo [1/5] 检查Git状态...
git status
echo.

echo [2/5] 设置远程仓库...
git remote add origin https://github.com/yunhongfeng-tracy/risk-analysis.git 2>nul || echo 远程仓库已存在，跳过添加
echo.

echo [3/5] 切换到main分支...
git branch -M main
echo.

echo [4/5] 推送代码到GitHub...
echo 正在推送代码，请输入GitHub凭据...
git push -u origin main
echo.

if %ERRORLEVEL% EQU 0 (
    echo [5/5] 部署成功！
    echo.
    echo ✅ 代码已推送到: https://github.com/yunhongfeng-tracy/risk-analysis
    echo.
    echo 📋 接下来的步骤:
    echo 1. 访问仓库设置页面
    echo 2. 启用GitHub Pages ^(Settings ^> Pages^)
    echo 3. 选择 "Deploy from a branch" ^> "main" ^> "/ (root)"
    echo 4. 几分钟后访问: https://yunhongfeng-tracy.github.io/risk-analysis
    echo.
    echo 🎉 恭喜！您的风险分析平台即将上线！
) else (
    echo ❌ 推送失败，请检查网络连接和GitHub凭据
)

echo.
echo 按任意键退出...
pause >nul