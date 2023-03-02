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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 24H1c-.55 0-1-.45-1-1s.45-1 1-1h22c.55 0 1 .45 1 1s-.45 1-1 1Zm-8.23-5.14 6.35-6.75c.87-.87 1.12-2.11.65-3.24a2.96 2.96 0 0 0-2.75-1.85h-2.07l-.03-3.05c0-2.19-1.78-3.97-3.97-3.97h-1.98C8.78 0 7 1.78 7 3.98V7H4.95c-1.23 0-2.28.71-2.75 1.85-.47 1.13-.22 2.38.63 3.22l6.33 6.8a3.984 3.984 0 0 0 5.62 0ZM8 9c.27 0 .52-.11.71-.29A.99.99 0 0 0 9 8V3.97C9 2.88 9.88 2 10.97 2h1.98c1.09 0 1.97.89 1.97 1.98l.03 4.05c0 .55.45.99 1 .99H19c.61 0 .85.47.9.61.06.14.22.64-.24 1.09l-6.33 6.73c-.77.76-2.01.75-2.75.01l-6.33-6.8a.96.96 0 0 1-.21-1.07c.06-.14.3-.61.9-.61H8Z"/></svg>
  