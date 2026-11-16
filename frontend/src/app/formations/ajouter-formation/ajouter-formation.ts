
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import {
  FormationRequest,
  ThemeFormation
} from '../../models/formation';

import { FormationService } from '../../services/formation-service';

@Component({
  selector: 'app-ajouter-formation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './ajouter-formation.html',
  styleUrl: './ajouter-formation.css'
})
export class AjouterFormation {

  // Liste des thèmes disponibles
  themes = Object.values(ThemeFormation);

  // Libellés affichés dans le formulaire
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

  // Données du formulaire
  formation: FormationRequest = {
    theme: ThemeFormation.JAVA,
    formationDetail: {
      fdTableMatiere: '',
      fdSupportPDF: ''
    }
  };

  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private formationService: FormationService,
    private router: Router
  ) {}

  // Obtenir le libellé du thème
  getThemeLabel(theme: ThemeFormation): string {
    return this.themeLabels[theme] ?? theme;
  }

  // Ajouter une formation
  ajouterFormation(): void {
    this.errorMessage = '';
    this.successMessage = '';

    const detail = this.formation.formationDetail;

    // Vérifier les champs
    if (
      !detail ||
      !detail.fdTableMatiere.trim() ||
      !detail.fdSupportPDF.trim()
    ) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      return;
    }

    this.loading = true;

    // Préparer les données envoyées au backend
    const nouvelleFormation: FormationRequest = {
      theme: this.formation.theme,
      formationDetail: {
        fdTableMatiere: detail.fdTableMatiere.trim(),
        fdSupportPDF: detail.fdSupportPDF.trim()
      }
    };

    this.formationService.addFormation(nouvelleFormation).subscribe({
      next: () => {
        this.loading = false;
        this.successMessage =
          'Formation ajoutée avec succès !';

        // Réinitialiser le formulaire
        this.formation = {
          theme: ThemeFormation.JAVA,
          formationDetail: {
            fdTableMatiere: '',
            fdSupportPDF: ''
          }
        };

        // Retourner à la liste des formations
        setTimeout(() => {
          this.router.navigate(['/formations']);
        }, 1000);
      },

      error: (error) => {
        console.error(
          'Erreur lors de l’ajout de la formation :',
          error
        );

        this.loading = false;
        this.errorMessage =
          'Erreur lors de l’ajout. Vérifiez le serveur Spring Boot et les données envoyées.';
      }
    });
  }
}
