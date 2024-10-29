const fs = require('fs');

function updateVersion(branch) {
  const packageJsonPath = './package.json';
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  let [major, minor, patch] = packageJson.version.split('.').map(Number);

  if (branch === 'main') {
    major += 1;
    minor = 0;
    patch = 0;
  } else if (branch === 'staging') {
    minor += 1;
    patch = 0;
  } else if (branch === 'develop') {
    patch += 1;
  } else {
    console.log(`Branch "${branch}" does not require a version update.`);
    return;
  }

  packageJson.version = `${major}.${minor}.${patch}`;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  console.log(`Updated version to ${packageJson.version}`);
}

const branch = process.env.GITHUB_REF_NAME || '';

updateVersion(branch);
