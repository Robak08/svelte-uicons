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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-wheelchair-move {customClass}"><path d="M18 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0Zm4.79 15.39-2.9 5.57c-.18.34-.53.54-.89.54-.16 0-.31-.04-.46-.11a.996.996 0 0 1-.42-1.35l2.89-5.55h-3.07C17.45 20.94 14.08 24 10 24c-4.41 0-8-3.59-8-8 0-2.17.85-4.2 2.4-5.71a.996.996 0 1 1 1.4 1.42A5.966 5.966 0 0 0 4 16c0 3.31 2.69 6 6 6 2.97 0 5.44-2.17 5.92-5h-2.18c-.94 0-1.81-.47-2.32-1.27s-.57-1.78-.18-2.63L14.07 7h-.76c-.76 0-1.46.44-1.8 1.12l-1.63 3.32a1 1 0 0 1-1.34.46 1 1 0 0 1-.46-1.34l1.63-3.32A4.034 4.034 0 0 1 13.3 5h3.8a2.833 2.833 0 0 1 2.57 4.03L16.91 15h4.06c.7 0 1.33.35 1.7.95s.4 1.32.09 1.95ZM13.74 15h1l3.15-6.81A.835.835 0 0 0 17.13 7h-.84l-3.22 6.94c-.16.33-.02.61.05.72.07.1.26.35.63.35Z"/></svg>
  