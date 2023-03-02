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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.269 24H5.5a5.5 5.5 0 0 1-5.475-6.037A5.65 5.65 0 0 1 5.693 13h6.538a3.978 3.978 0 0 0 3.827-2.838l2.572-8.593A2.234 2.234 0 0 1 21.46.1a2.233 2.233 0 0 1 1.44 2.777l-4.065 14.03A9.942 9.942 0 0 1 9.269 24ZM20.254-.312Zm1.474 14.426-.97 3.35A11.993 11.993 0 0 1 15.929 24H18.5a5.5 5.5 0 0 0 5.475-6.037 5.425 5.425 0 0 0-2.247-3.849ZM3.54 11.305A7.768 7.768 0 0 1 5.693 11H8.3a4.022 4.022 0 0 1-.361-.838L5.37 1.569A2.234 2.234 0 0 0 1.1 2.877Z"/></svg>
  