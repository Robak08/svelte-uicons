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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m22.79 17.89-2.9 5.57c-.18.34-.53.54-.89.54-.16 0-.31-.04-.46-.11a.996.996 0 0 1-.42-1.35L21.01 17h-7.27c-.94 0-1.81-.47-2.32-1.27s-.57-1.78-.18-2.63L14.07 7h-.76c-.76 0-1.46.44-1.8 1.12L9.44 12.2c-.49 1.05-.6 2.21-.32 3.25.58 2.12 2.42 3.55 4.6 3.55h3.68c-1.19 2.93-4.06 5-7.42 5-4.42 0-8-3.58-8-8s3.23-7.64 7.34-7.97l.39-.79A4.034 4.034 0 0 1 13.3 5h3.8a2.833 2.833 0 0 1 2.57 4.03L16.91 15h4.06c.7 0 1.33.35 1.7.95s.4 1.32.09 1.95ZM20.5 5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>
  