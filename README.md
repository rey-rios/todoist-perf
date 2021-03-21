# todoist api
Artillery Performance Testing repo for `https://api.todoist.com/`

## Requirements
1. Nodejs installed
2. Artillery installed

## Installation

1. Clone repository using git bash to your desired location:
</br> `git clone https://github.com/rey-rios/todoist-perf.git`

2. Open the cloned project using Visual Studio Code (VSCode)

3. In VSCode's terminal run the following command:
</br> `npm install`

## Running the tests
Execute below commands in VSCode's terminal to run all the **Tasks tests**:
</br>`export TOKEN="{your_todoist_token}"` \*
</br>`npm run test`
</br>
</br>*\*Replace `{your_todoist_token}` with a valid todoist-api Auth token.*
</br></br>*HTML report will be published in below path*:
</br>`results/report.html`
