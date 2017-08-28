// INTERFACES

export interface Crime {
  name: string;
  occurences: number;
}

export interface PieData {
  x: string;
  y: number;
}

export interface CrimeData {
  [key: string]: number;
}

// HELPERS

function crimeDataToArr(crimeData: CrimeData): Crime[] {
  return Object.keys(crimeData)
    .map(key => ({
      name: key,
      occurences: crimeData[key]
    }))
    .sort((a, b) => b.occurences - a.occurences);
}

function crimeCount(crimes: Crime[]): number {
  return crimes.map(crime => crime.occurences).reduce((a, b) => a + b, 0);
}

// EXPORTS

export function crimeOccurences(crimes: string[]): Crime[] {
  const data: CrimeData = {};

  crimes.forEach(crime => {
    data.hasOwnProperty(crime) ? (data[crime] += 1) : (data[crime] = 1);
  });

  return crimeDataToArr(data);
}

export function pieData(crimes: Crime[], totalCrimes: number): PieData[] {
  const data: PieData[] = crimes.map(crime => ({
    x: crime.name,
    y: crime.occurences
  }));

  const otherCrimesCount: number = totalCrimes - crimeCount(crimes);

  data.push({ x: 'Other', y: otherCrimesCount });

  return data;
}
