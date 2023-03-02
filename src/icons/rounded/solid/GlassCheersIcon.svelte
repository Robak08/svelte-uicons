<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.3 22.571-4.458 1.384a1 1 0 0 1-.594-1.91l1.244-.386-.918-2.7a4.917 4.917 0 0 1-.581.04 5 5 0 0 1-4.807-3.661l-.127-.375 1-2.965H22.6l.2.607a4.953 4.953 0 0 1-2.333 5.721l.931 2.737 1.3-.4a1 1 0 0 1 .594 1.91ZM14.656 10h7.267l-.966-2.868A3.023 3.023 0 0 0 17.28 5.11l-3.524.982a5.139 5.139 0 0 1 .391.571A4.936 4.936 0 0 1 14.656 10Zm-4.084-3.816L6.719 5.11A3.008 3.008 0 0 0 3.052 7.1L2.078 10h10.541l.02-.059a3 3 0 0 0-2.067-3.757Zm-9.387 6.473a4.956 4.956 0 0 0 2.364 5.682l-.944 2.728-1.305-.406a1 1 0 1 0-.6 1.91l4.458 1.384a1 1 0 0 0 .594-1.91l-1.236-.385.935-2.7a4.982 4.982 0 0 0 .559.04 5 5 0 0 0 4.79-3.608L11.945 12H1.406ZM15.553 3.9a1 1 0 0 0 1.347-.453l1-2a1 1 0 1 0-1.79-.894l-1 2a1 1 0 0 0 .443 1.347Zm-8.448-.453A1 1 0 1 0 8.9 2.553l-1-2a1 1 0 0 0-1.79.894ZM12 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"/></svg>
  