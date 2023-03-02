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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.894 24.024c-1.961 0-3.839-.007-4.492-.025a3.8 3.8 0 0 1-.833-.12 3.5 3.5 0 0 1-.451-6.589 6.376 6.376 0 0 1 .057-2.731 6 6 0 0 1 11.367-.859c.136.325.763.469.763.469 4.926 1.279 4.861 8.572-.144 9.7A5.241 5.241 0 0 1 19.1 24c-.871.016-3.087.024-5.206.024ZM6 16.256a8.27 8.27 0 0 1 .23-2.17A8.032 8.032 0 0 1 11.017 8.6a7.7 7.7 0 0 1 2.488-4.551 2.194 2.194 0 0 0 .619-2.153 2.216 2.216 0 0 0-1.6-1.6 10.756 10.756 0 0 0-4.163-.17 10.035 10.035 0 0 0-8.3 8.755 9.914 9.914 0 0 0 3.797 8.909c.064.05.327.222.646.422A5.42 5.42 0 0 1 6 16.256Z"/></svg>
  