import { use } from "nexus";
import { prisma } from "nexus-plugin-prisma";

import "./userSchema.ts";

use(prisma({ features: { crud: true } }));
