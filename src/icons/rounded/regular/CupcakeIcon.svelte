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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.679 11.408a12.057 12.057 0 0 0-8.968-7.144 2.994 2.994 0 1 0-5.422 0 12.058 12.058 0 0 0-8.965 7.144 4.04 4.04 0 0 0 .353 3.811 3.989 3.989 0 0 0 1.4 1.284l.6 3.372A4.993 4.993 0 0 0 7.6 24h8.8a4.991 4.991 0 0 0 4.922-4.125l.6-3.371a3.975 3.975 0 0 0 1.4-1.284 4.043 4.043 0 0 0 .357-3.812ZM12 2a1 1 0 0 1 0 2 1 1 0 0 1 0-2Zm7.357 17.525A3 3 0 0 1 16.4 22H7.6a3 3 0 0 1-2.954-2.475l-.371-2.08A3 3 0 0 0 8 17.22a2.99 2.99 0 0 0 4 0 2.99 2.99 0 0 0 4 0 3 3 0 0 0 3.728.225Zm2.3-5.413A1.956 1.956 0 0 1 20 15a1.645 1.645 0 0 0-1.22.625 1.01 1.01 0 0 1-1.56 0 1.529 1.529 0 0 0-2.44 0 1.01 1.01 0 0 1-1.56 0 1.529 1.529 0 0 0-2.44 0 1.01 1.01 0 0 1-1.56 0 1.529 1.529 0 0 0-2.44 0 1.01 1.01 0 0 1-1.56 0A1.643 1.643 0 0 0 4 15a1.955 1.955 0 0 1-1.656-.888 2.016 2.016 0 0 1-.177-1.928c3.267-8.2 16.4-8.2 19.668 0a2.016 2.016 0 0 1-.177 1.928Z"/></svg>
  