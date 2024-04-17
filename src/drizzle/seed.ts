import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

require('dotenv-expand').expand(require('dotenv').config());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool, { schema: schema });

async function seedCategoriesProductFeaturesAndStandards() {
  const values = [
    {
      title: 'Work Shoes',
      subCategories: [
        {
          title: 'Work Shoe',
          features: [
            {
              type: 'Closure Style',
              variant: 'select',
            },
            {
              type: 'Custom With',
              variant: 'select',
            },
            {
              type: 'Gender',
              variant: 'select',
            },
            {
              type: 'Guard Style',
              variant: 'select',
            },
            {
              type: 'Insole Style',
              variant: 'select',
            },
            {
              type: 'Sole Style',
              variant: 'select',
            },
            {
              type: 'Color',
              variant: 'select',
            },
            {
              type: 'Shoe Color',
              variant: 'select',
            },
            {
              type: 'Sole Color',
              variant: 'select',
            },
            {
              type: 'Liner Material',
              variant: 'select',
            },
            {
              type: 'Material',
              variant: 'select',
            },
            {
              type: 'Safety Toe Material',
              variant: 'select',
            },
            {
              type: 'Shank Material',
              variant: 'select',
            },
            {
              type: 'Size',
              variant: 'select',
            },
            {
              type: 'Height',
              variant: 'num',
              extra: 'cm',
            },
            {
              type: 'Weight',
              variant: 'num',
              extra: 'g',
            },
            {
              type: 'Width',
              variant: 'num',
              extra: 'cm',
            },
            {
              type: 'Thickness',
              variant: 'num',
              extra: 'g',
            },
            {
              type: 'Collar Style',
              variant: 'select',
            },
            {
              type: 'Midsole Style',
              variant: 'select',
            },
            {
              type: 'Sole Material',
              variant: 'select',
            },
          ],
          standards: [
            {
              title: 'EN 14476',
              versions: [
                {
                  title: 'No specification',
                },
                {
                  title: 'EN 14476:2013 - prA2:2016',
                },
                {
                  title: 'EN 14476:2013+A2:2019',
                },
                {
                  title: 'EN 14476:2005',
                },
                {
                  title: 'EN 14476:2005+A1:2006',
                },
                {
                  title: 'EN 14476:2013',
                },
                {
                  title: 'EN 14476:2013+A1:2015',
                },
              ],
            },
            {
              title: 'EN IEC 61482-1-2',
              versions: [
                {
                  title: 'No specification',
                },
                {
                  title: 'EN IEC 61482-1-2:2018',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  // Add categories
  const newCategoryIds = await db
    .insert(schema.category)
    .values(values.map((v) => ({ title: v.title })))
    .returning({ id: schema.category.id });
  for (let i = 0; i < newCategoryIds.length; i++) {
    // Add subcategories
    const newSubcategoryIds = await db
      .insert(schema.subcategory)
      .values(
        values[i].subCategories.map((sc) => ({
          title: sc.title,
          categoryId: newCategoryIds[i].id,
        })),
      )
      .returning({ id: schema.subcategory.id });

    for (let j = 0; j < newSubcategoryIds.length; j++) {
      // Add feature types
      await db.insert(schema.featureType).values(
        values[i].subCategories[j].features.map((f) => ({
          title: f.type,
          variant:
            f.variant as (typeof schema.featureTypeVariantEnum.enumValues)[number],
          extra: f.extra,
          subcategoryId: newSubcategoryIds[j].id,
        })),
      );

      // Add standards
      const newStandardIds = await db
        .insert(schema.standard)
        .values(
          values[i].subCategories[j].standards.map((s) => ({
            title: s.title,
            subcategoryId: newSubcategoryIds[j].id,
          })),
        )
        .returning({ id: schema.standard.id });

      for (let k = 0; k < newStandardIds.length; k++) {
        // Add standard versions
        await db.insert(schema.standardVersion).values(
          values[i].subCategories[j].standards[k].versions.map((v) => ({
            title: v.title,
            standardId: newStandardIds[k].id,
          })),
        );
      }
    }
  }
}

async function main() {
  console.log('Seed started...');

  // Seed functions here
  await seedCategoriesProductFeaturesAndStandards();

  console.log('Seed ended...');
  process.exit(0);
}

main().catch((err) => {
  console.log(err);
  process.exit(1);
});
