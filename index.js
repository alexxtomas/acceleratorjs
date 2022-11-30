import { program } from 'commander'
import inquirer from 'inquirer'

program.version('0.0.0').description('cualquier cosa')

const stylingObj = [
  {
    name: 'Tailwind',
    prompt: () =>
      inquirer.prompt([
        {
          type: 'input',
          name: 'tailwind',
          message: 'cualquier cosa'
        }
      ])
  }
]

const tailwindPrompt = program.command('save').action(async () => {
  await inquirer
    .prompt([
      {
        type: 'expand',
        name: 'styling',
        message: 'Something?',
        choices: ['Tailwind', 'Chakra']
      }
    ])
    .then(({ styling }) => {
      const selected = stylingObj.find(({ name }) => name === styling)
      selected.prompt()
    })
})
program.parse(process.argv)
