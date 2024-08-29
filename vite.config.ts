import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1500, // Ajuste o limite conforme necessário
    // Outras opções de build podem ser adicionadas aqui
    // Por exemplo, configurando manualChunks para melhorar o agrupamento de chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Exemplo de configuração manualChunks
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  // Outras configurações do Vite podem ser definidas aqui
  // Por exemplo, plugins, configurações de servidor de desenvolvimento, etc.
});
