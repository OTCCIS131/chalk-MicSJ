const chalk = require('chalk');

console.log(chalk.blue('Happy') + chalk.magenta(' Birthday') + chalk.red(' to you!'));
console.log(chalk.cyan('Happy') + chalk.white(' Birthday') + chalk.green(' to you!'));
console.log(chalk.blueBright('Happy') + chalk.magenta(' Birthday') + chalk.blueBright.bold(' Mr. E!!!'));
console.log(chalk.magentaBright('Happy') + chalk.grey(' Birthday') + chalk.underline.cyanBright(' to you!'));

console.log(chalk.gray.bgCyanBright.underline('Story Time!'));
console.log(chalk.gray.bgGreen('Every time I goout of town for a weekend my fat cat tries to run away.'));
console.log(chalk.gray.bgRed('Apparently he decides he is going to starve to death if there are no humans for 24 hrs'));
console.log(chalk.gray.bgWhite('So when we get home he cries and cries while hitting the doornob to the back door.'));
console.log(chalk.gray.bgMagenta('I guess he thinks he is more capable of takingcare of himself even though he is fat and '));
console.log(chalk.gray.bgYellow('has never been outside.'));