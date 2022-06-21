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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrows-h {customClass}"><path d="M23.312 10.012c-.29-.327-.574-.637-.771-.834L19.713 6.3a1 1 0 0 0-1.426 1.4l2.834 2.885c.108.108.244.255.389.414H2.555c.146-.16.284-.308.4-.42L5.779 7.7a1 1 0 0 0-1.426-1.4L1.53 9.172c-.2.2-.487.513-.777.84A2.99 2.99 0 0 0 0 11.994v.012a3 3 0 0 0 .754 1.983c.289.326.573.636.769.833l2.83 2.878a1 1 0 0 0 1.426-1.4l-2.835-2.886A13.426 13.426 0 0 1 2.555 13H21.51c-.145.16-.283.308-.4.42l-2.823 2.88a1 1 0 1 0 1.426 1.4l2.822-2.873c.2-.2.486-.513.777-.84a3 3 0 0 0 0-3.975Z"/></svg>
