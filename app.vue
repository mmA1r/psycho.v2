<script setup>
    onBeforeMount(() => {
        useHead(
            {
                script: [{ 
                    children: `
                        ;(function () {
                            try {
                                var theme = localStorage.getItem('theme');

                                if (theme !== 'light' && theme !== 'dark') {
                                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                                    localStorage.setItem('theme', theme);
                                }

                                const style = document.createElement('style');
                                style.textContent = \`
                                    :root {
                                        --color__main: var(--color__main_\${theme});
                                        --color__accent: var(--color__accent_\${theme});
                                        --color__light-accent: var(--color__light-accent_\${theme});
                                        --color__dark-accent: var(--color__dark-accent_\${theme});
                                        --color__shadow: var(--color__shadow_\${theme});
                                    }
                                \`;

                                document.head.appendChild(style);
                            } catch (_) {}
                        })();
                    `,
                    body: false
                }],
            },
            { mode: 'client' }
        );
    });
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
