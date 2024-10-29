# Hello VuePress
# My first VuePress project
# git status 查看暂存区状态
# git add . 添加所有文件到暂存区
# git reset 撤销暂存区
Git 仓库中的分支可以分为 main 分支和其他分支。这些分支有不同的用途和角色。下面是一些常见的分支类型及其用途：

1. main 分支
定义：main 分支（有时也称为 master 分支）是默认的主分支，通常包含项目的最新稳定版本。
用途：
生产环境：main 分支通常用于部署到生产环境。
稳定性：确保 main 分支始终处于稳定状态，避免包含未经过充分测试的代码。
发布：新版本的发布通常基于 main 分支。
2. 其他分支
功能分支（Feature Branches）：

定义：用于开发新功能或进行较大规模的改动。
用途：
隔离开发：每个功能分支独立开发，避免影响主分支的稳定性。
并行开发：多个开发者可以同时在不同的功能分支上工作。
命名：通常命名为 feature/功能名称，例如 feature/add-login。
开发分支（Development Branches）：

定义：用于集成多个功能分支的更改。
用途：
集成测试：在 main 分支之前进行集成测试，确保功能分支的更改不会引入问题。
命名：通常命名为 dev 或 develop。
修复分支（Hotfix Branches）：

定义：用于快速修复生产环境中的紧急问题。
用途：
快速响应：直接从 main 分支创建，修复问题后立即合并回 main 分支。
命名：通常命名为 hotfix/修复编号，例如 hotfix/1234。
发布分支（Release Branches）：

定义：用于准备新版本的发布。
用途：
最终测试：在发布前进行最终的测试和调整。
版本号管理：确保版本号和发布说明正确无误。
命名：通常命名为 release/版本号，例如 release/1.0.0。
分支管理流程
创建功能分支：

sh
git checkout -b feature/new-feature main
开发和提交更改：

sh
git add .
git commit -m "Add new feature"
推送功能分支：

sh
git push -u origin feature/new-feature
合并功能分支到开发分支：

sh
git checkout dev
git merge feature/new-feature
git push origin dev
创建发布分支：

sh
git checkout -b release/1.0.0 dev
进行最终测试和调整：

sh
git add .
git commit -m "Prepare for release 1.0.0"
合并发布分支到 main 分支：

sh
git checkout main
git merge release/1.0.0
git push origin main
创建标签：

sh
git tag v1.0.0
git push origin v1.0.0
删除已完成的分支：

sh
git branch -d feature/new-feature
git push origin --delete feature/new-feature
总结
main 分支：主要包含项目的最新稳定版本。
其他分支：用于开发新功能、修复问题、准备发布等。
通过合理管理和使用不同类型的分支，可以有效地组织和管理项目开发过程，确保代码质量和稳定性。