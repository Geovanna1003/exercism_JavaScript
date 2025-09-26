// 1. Exporta a constante com nome EXATO:
export const EXPECTED_MINUTES_IN_OVEN = 40;

// 2. Função que retorna esse valor
export function getExpectedMinutesInOven() {
  return EXPECTED_MINUTES_IN_OVEN;
}

// 3. Subtrai o tempo passado no forno
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

// 4. Tempo por camada
const MINUTES_PER_LAYER = 2;

// 5. Multiplica o número de camadas pelo tempo por camada
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * MINUTES_PER_LAYER;
}

// 6. Soma o tempo de preparo com o tempo no forno
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
