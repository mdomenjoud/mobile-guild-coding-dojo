import { defaults as tsjPreset } from 'ts-jest/presets';
import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    ...tsjPreset,
    preset: '@testing-library/react-native',
    transform: {
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.tsx$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.spec.json',
            },
        ],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        'node_modules/(?!(@react-native|react-native|react-native-code-push|@react-navigation|uuid|react-native-config|react-native-version-check|react-native-fs|react-native-reanimated|@zerogachis/smartway-react-native-ui|react-native-gesture-handler)/)',
    ],
    setupFilesAfterEnv: [
        '<rootDir>/__tests__/jest-setup.ts',
    ],
    moduleNameMapper: {
        '^app/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: ['**/?(*.)test.(ts|tsx)'],
};

export default jestConfig;
