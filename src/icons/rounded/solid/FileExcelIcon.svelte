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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 7V.46c.91.35 1.75.88 2.46 1.59l3.48 3.49c.71.71 1.24 1.55 1.59 2.46h-6.54c-.55 0-1-.45-1-1Zm8 3.49V19c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h4.51c.16 0 .32.01.49.02V7c0 1.65 1.35 3 3 3h6.98c.01.16.02.32.02.49ZM13.3 17l1.97-2.36a1.001 1.001 0 1 0-1.54-1.28L12 15.44l-1.73-2.08c-.35-.42-.98-.48-1.41-.13-.42.35-.48.98-.13 1.41L10.7 17l-1.97 2.36a1.001 1.001 0 1 0 1.54 1.28L12 18.56l1.73 2.08c.2.24.48.36.77.36.23 0 .45-.08.64-.23.42-.35.48-.98.13-1.41L13.3 17Z"/></svg>
  