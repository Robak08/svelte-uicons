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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-heart-crack {customClass}"><path d="M17.5 1c-2.31 0-4.35 1.31-5.5 3.27C10.85 2.31 8.81 1 6.5 1 2.92 1 0 4.14 0 8c0 4.61 4.73 9.51 8.7 12.81.96.79 2.13 1.19 3.3 1.19s2.34-.4 3.3-1.19C19.27 17.51 24 12.6 24 8c0-3.86-2.92-7-6.5-7Zm-3.48 18.28c-1.17.97-2.87.97-4.04 0C7 16.8 2 12.04 2 8c0-2.71 2.06-5 4.5-5s4.29 2.07 4.49 4.6L9.68 8.91c-.9.9-.9 2.36 0 3.26l2.34 2.4-1.72 1.72a.996.996 0 1 0 1.41 1.41l1.72-1.72c.8-.8.8-2.1 0-2.9l-2.34-2.34c-.07-.07-.09-.16-.09-.22s.02-.14.09-.22l1.62-1.62.02-.02c.17-.18.27-.42.27-.68 0-2.71 2.06-5 4.5-5s4.5 2.29 4.5 5c0 4.03-5 8.8-7.98 11.28Z"/></svg>
  