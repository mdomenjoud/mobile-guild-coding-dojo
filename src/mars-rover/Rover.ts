type RoverPosition = {
    x: number,
    y: number,
    orientation: string
}

export function moveRovers(input: string) {

    const inputArray = input.split('\n')

    if (inputArray.length === 1) {
        return '';
    }
    inputArray.shift();

    const roverPosition: RoverPosition = {
        x: parseInt(inputArray[0].split(' ')[0]),
        y: parseInt(inputArray[0].split(' ')[1]),
        orientation: inputArray[0].split(' ')[2]
    }

    if (inputArray.length === 1) {
        return inputArray[0];
    }

    const instructions = inputArray[1];
    if(instructions === 'M'){
        const newPosition = getNewPosition(roverPosition);
        return `${newPosition} ${roverPosition.orientation}`;
    } else{
        const newOrientation = getNewOrientation(roverPosition.orientation, instructions);
        return `0 0 ${newOrientation}`;
    }
}

const directions = ['N', 'E', 'S', 'W']

function getNewOrientation(roverOrientation: string, directionChange: string): string {
    const currentOrientationIndex = directions.indexOf(roverOrientation);
    let directionChangeIndex = 3;
    if(directionChange === 'R') {
        directionChangeIndex = 1;
    }

    const newOrientation = directions[(currentOrientationIndex + directionChangeIndex) % 4];
    
    return newOrientation;
}

function getNewPosition(roverPosition: RoverPosition){
    return `${roverPosition.x + 1} ${roverPosition.y}`
}







