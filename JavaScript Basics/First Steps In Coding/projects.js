function projects(input) {
    let projetsName = input[0];
    let projetsNumber = Number(input[1]);
    let projectsCount = projetsNumber*3;
     
    console.log(`The architect ${projetsName} will need ${projectsCount} hours to complete ${projetsNumber} project / s.`);
        //console.log(projectsCount)
}
projects(["George","4"])