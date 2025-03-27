import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,              // Usar variáveis globais (como "describe", "it", etc.).
        environment: 'node',       // Define o ambiente de teste ('node', 'jsdom', etc.).
        coverage: {
            provider: 'istanbul',     // Ferramenta de cobertura de código (e.g., istanbul).
            reporter: ['text', 'html'],    // Formatos do relatório.
        },
    },
});
