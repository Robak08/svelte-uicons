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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 20a5.983 5.983 0 0 0 .539 2.481A4.779 4.779 0 0 1 4.433 23a4.725 4.725 0 0 1-4.419-5.066C.309 11.919 5.158 7.6 7.379 5.919a8.235 8.235 0 0 1 1.88 3.761C7.859 12.117 6 15.956 6 20Zm6-13a1.967 1.967 0 0 1 1.3.488 14.735 14.735 0 0 1 2.7-3.9A3.1 3.1 0 0 0 13 0h-2a3.1 3.1 0 0 0-3 3.589A14.359 14.359 0 0 1 10.7 7.5 1.97 1.97 0 0 1 12 7Zm4.632-1.075a8.079 8.079 0 0 0-1.891 3.751c1.587 2.825 4.45 8.59 2.72 12.813 3.089 1.738 6.832-1.148 6.528-4.556-.298-6.007-5.136-10.327-7.36-12.008ZM12 8.995C10.414 11.167 3.916 23.307 12 24c8.09-.7 1.579-12.827 0-15.005Z"/></svg>
  