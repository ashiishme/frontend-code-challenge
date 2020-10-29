/**
 * Project          : Frontend Code Challenge
 * Module           : Components type definition
 * Source filename  : components.d.ts
 * Description      : Common type definition for all the components
 * Author           : Ashish Yadav <contact@ashiish.me>
 *
 */

/**
 * Type Definition for all the components
 *
 * Include all the common types that are re-used as long as
 * they don't requires specific definition file for large type definition
 */

/**
 * Package item
 */
interface PackageItem {
    title: string;
    description: string;
    price: string;
}
