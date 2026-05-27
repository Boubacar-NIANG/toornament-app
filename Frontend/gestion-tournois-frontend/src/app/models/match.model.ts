export interface Match {
    id: number;
    equipeA: string;
    equipeB: string;
    date: Date;
    scoreA?: number;
    scoreB?: number;
    tournoi: string;
    statut: 'En Attente' | 'En Cours' | 'Terminé';
  }
  