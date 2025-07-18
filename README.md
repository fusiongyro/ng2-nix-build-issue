# Nglearn

Demonstrates a problem with Nix build using Angular.

To see the problem, run:

    nix build -L github:fusiongyro/ng2-nix-build-issue

You should get the following output:

```
warning: Git tree '/home/dlyons@ad.nrao.edu/Projects/nglearn' is dirty
nglearn> Running phase: unpackPhase
nglearn> unpacking source archive /nix/store/d52v1r5653zxy482wa2fld1w52srqy05-source
nglearn> source root is source
nglearn> Running phase: patchPhase
nglearn> Running phase: updateAutotoolsGnuConfigScriptsPhase
nglearn> Running phase: configurePhase
nglearn> no configure script, doing nothing
nglearn> Executing npmConfigHook
nglearn> Configuring npm
nglearn> Installing patched package.json/package-lock.json
nglearn> Installing dependencies
nglearn> npm error code ENOTCACHED
nglearn> npm error request to https://registry.npmjs.org/zone.js/-/zone.js-0.15.1.tgz failed: cache mode is 'only-if-cached' but no cached response is available.
nglearn> npm error A complete log of this run can be found in: /build/.npm/_logs/2025-07-18T16_19_40_870Z-debug-0.log
nglearn> ERROR: npm failed to install dependencies
nglearn> Here are a few things you can try, depending on the error:
nglearn> 1. Set `npmFlags = [ "--legacy-peer-deps" ]`
error: builder for '/nix/store/pyidlrqlmpljl6mb7792sprxapjz0b9y-nglearn.drv' failed with exit code 1;
       last 10 log lines:
       > Installing dependencies
       > npm error code ENOTCACHED
       > npm error request to https://registry.npmjs.org/zone.js/-/zone.js-0.15.1.tgz failed: cache mode is 'only-if-cached' but no cached response is available.
       > npm error A complete log of this run can be found in: /build/.npm/_logs/2025-07-18T16_19_40_870Z-debug-0.log
       >
       > ERROR: npm failed to install dependencies
       >
       > Here are a few things you can try, depending on the error:
       > 1. Set `npmFlags = [ "--legacy-peer-deps" ]`
       >
       For full logs, run 'nix-store -l /nix/store/pyidlrqlmpljl6mb7792sprxapjz0b9y-nglearn.drv'.
```

## Reconstruction

This is how the project was constructed:

1. Create a new Angular project using `nix run nixpkgs#nodePackages.@angular/cli -- new nglearn`
2. I chose "CSS" and "No" for SSR and SSG.
3. `cd nglearn`
4. Now we need a `package-lock.json`, so I ran this:
   ```
   $ nix shell nixpkgs#nodejs
   $ npm i --package-lock-only
   $ exit
   ```
5. Created the flake.nix in this repository

After `nix build` failed the first time, I added `npmFlags = [ "--legacy-peer-deps" ]` per the suggestion, but this seemed to have no effect.
