
export enum ThemeFormation {
  JAVA = 'JAVA',
  PYTHON = 'PYTHON',
  JAVASCRIPT = 'JAVASCRIPT',
  CSHARP = 'CSHARP',
  RUBY = 'RUBY',
  PHP = 'PHP',
  SWIFT = 'SWIFT',
  KOTLIN = 'KOTLIN',
  GO = 'GO',
  RUST = 'RUST',
  HTML_CSS = 'HTML_CSS',
  SQL = 'SQL',
  TYPESCRIPT = 'TYPESCRIPT',
  CPLUSPLUS = 'CPLUSPLUS',
  C = 'C'
}

export interface FormationDetail {
  fdId?: number;
  fdTableMatiere: string;
  fdSupportPDF: string;
}

export interface Formation {
  id?: number;
  theme: ThemeFormation;
  formationDetail?: FormationDetail | null;
}

export interface FormationRequest {
  theme: ThemeFormation;
  formationDetail: FormationDetail;
}
