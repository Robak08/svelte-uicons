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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 17v3.946c0 1.368-.916 2.598-2.248 2.91A5.492 5.492 0 0 1 7.5 24a5.464 5.464 0 0 1-5.233-3.835A4.978 4.978 0 0 1 0 16c0-.886.235-1.737.686-2.5A4.89 4.89 0 0 1 0 11c0-1.568.752-3.04 2-3.979V7a4.007 4.007 0 0 1 3.102-3.898A4.008 4.008 0 0 1 9 0h.022A1.984 1.984 0 0 1 11 1.984V8H8.723C8.377 7.405 7.739 7 7 7a2 2 0 1 0 0 4c.738 0 1.376-.405 1.723-1H11v5H8.723c-.346-.595-.984-1-1.723-1a2 2 0 1 0 0 4c.738 0 1.376-.405 1.723-1H11Zm13-6c0-1.568-.752-3.04-2-3.979V7a4.007 4.007 0 0 0-3.102-3.898A4.008 4.008 0 0 0 15 0h-.022A1.983 1.983 0 0 0 13 1.983V12h2c1 0 1-1 1-1v-.277a1.991 1.991 0 0 1-.938-2.224 2.003 2.003 0 0 1 3.939.502c0 .738-.405 1.376-1 1.723v.277a3 3 0 0 1-3 3h-2v6.946c0 1.368.916 2.598 2.247 2.91.402.094.822.144 1.253.144a5.464 5.464 0 0 0 5.233-3.835 4.978 4.978 0 0 0 2.267-4.165 4.88 4.88 0 0 0-.686-2.5 4.89 4.89 0 0 0 .686-2.5Z"/></svg>
  