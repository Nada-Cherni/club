
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  Formation,
  ThemeFormation
} from '../../models/formation';

import { FormationService } from '../../services/formation-service';

@Component({
  selector: 'app-list-formation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-formation.html',
  styleUrl: './list-formation.css'
})
export class ListFormation implements OnInit {

  formations: Formation[] = [];
  loading = false;
  errorMessage = '';
  successMessage = '';

  themeLabels: Record<ThemeFormation, string> = {
    [ThemeFormation.JAVA]: 'Java',
    [ThemeFormation.PYTHON]: 'Python',
    [ThemeFormation.JAVASCRIPT]: 'JavaScript',
    [ThemeFormation.CSHARP]: 'C#',
    [ThemeFormation.RUBY]: 'Ruby',
    [ThemeFormation.PHP]: 'PHP',
    [ThemeFormation.SWIFT]: 'Swift',
    [ThemeFormation.KOTLIN]: 'Kotlin',
    [ThemeFormation.GO]: 'Go',
    [ThemeFormation.RUST]: 'Rust',
    [ThemeFormation.HTML_CSS]: 'HTML/CSS',
    [ThemeFormation.SQL]: 'SQL',
    [ThemeFormation.TYPESCRIPT]: 'TypeScript',
    [ThemeFormation.CPLUSPLUS]: 'C++',
    [ThemeFormation.C]: 'C'
  };

  constructor(
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    this.chargerFormations();
  }

  chargerFormations(): void {
    this.loading = true;
    this.errorMessage = '';

    this.formationService.getFormations().subscribe({
      next: (data) => {
        this.formations = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur chargement formations :', error);
        this.errorMessage =
          'Impossible de charger les formations.';
        this.loading = false;
      }
    });
  }

  getThemeLabel(theme: ThemeFormation): string {
    return this.themeLabels[theme] ?? theme;
  }

  supprimerFormation(formation: Formation): void {
    if (formation.id == null) {
      return;
    }

    const confirmation = window.confirm(
      `Voulez-vous supprimer la formation "${this.getThemeLabel(formation.theme)}" ?`
    );

    if (!confirmation) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.formationService.deleteFormation(formation.id).subscribe({
      next: () => {
        this.successMessage = 'Formation supprimée avec succès.';
        this.chargerFormations();
      },
      error: (error) => {
        console.error('Erreur suppression formation :', error);
        this.errorMessage =
          'Impossible de supprimer cette formation.';
        this.loading = false;
      }
    });
  }
}
