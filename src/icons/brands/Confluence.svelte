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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.873 18.057c-.254.399-.544.87-.761 1.233a.765.765 0 0 0 .254 1.052l4.966 3.046a.763.763 0 0 0 1.051-.254c.181-.326.435-.762.725-1.233 1.957-3.228 3.951-2.865 7.503-1.161l4.929 2.321c.399.181.834 0 1.015-.363l2.356-5.331c.181-.363 0-.834-.362-1.015a152.908 152.908 0 0 1-4.929-2.357c-6.707-3.228-12.398-3.01-16.747 4.062z"/><path d="M23.127 5.943c.254-.399.544-.87.761-1.233a.765.765 0 0 0-.254-1.052L18.668.611a.763.763 0 0 0-1.051.254 33.03 33.03 0 0 1-.725 1.233c-1.957 3.228-3.951 2.865-7.503 1.161L4.461.938a.771.771 0 0 0-1.015.363L1.09 6.632c-.181.363 0 .834.362 1.016 1.051.471 3.117 1.451 4.929 2.357 6.706 3.192 12.397 3.01 16.746-4.062z"/></svg>
  