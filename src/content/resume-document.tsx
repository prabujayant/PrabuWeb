import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  education,
  experience,
  projects,
  publications,
  siteConfig,
  skills,
} from "@/content/profile";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fffdf8",
    color: "#1d1b17",
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.45,
    padding: 32,
  },
  header: {
    borderBottom: "1 solid #e8dccd",
    marginBottom: 16,
    paddingBottom: 12,
  },
  name: {
    fontSize: 21,
    fontWeight: 700,
    marginBottom: 4,
  },
  role: {
    color: "#8f4e31",
    fontSize: 11,
    marginBottom: 6,
  },
  links: {
    color: "#4f5563",
    fontSize: 9,
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    color: "#8f4e31",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 0.4,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  item: {
    marginBottom: 8,
  },
  itemHead: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  itemTitle: {
    fontSize: 10.5,
    fontWeight: 700,
  },
  itemMeta: {
    color: "#5e6775",
    fontSize: 9,
  },
  bullet: {
    color: "#47505d",
    marginBottom: 2,
  },
  skillWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skillPill: {
    backgroundColor: "#f1e7d8",
    borderRadius: 999,
    color: "#5c3626",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export function ResumeDocument() {
  return (
    <Document
      author={siteConfig.name}
      title={`${siteConfig.name} Resume`}
      subject={siteConfig.description}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{siteConfig.name}</Text>
          <Text style={styles.role}>{siteConfig.tagline}</Text>
          <Text style={styles.links}>
            {siteConfig.location} | {siteConfig.email} | {siteConfig.phone}
          </Text>
          <Text style={styles.links}>
            <Link src={siteConfig.socialLinks[0].href}>LinkedIn</Link> |{" "}
            <Link src={siteConfig.socialLinks[1].href}>GitHub</Link> |{" "}
            <Link src={siteConfig.socialLinks[2].href}>Portfolio</Link>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text>{siteConfig.intro}</Text>
          <Text>{siteConfig.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((item) => (
            <View key={item.company} style={styles.item}>
              <View style={styles.itemHead}>
                <Text style={styles.itemTitle}>
                  {item.company} | {item.role}
                </Text>
                <Text style={styles.itemMeta}>{item.period}</Text>
              </View>
              {item.accomplishments.map((entry) => (
                <Text key={entry} style={styles.bullet}>
                  • {entry}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projects.map((project) => (
            <View key={project.name} style={styles.item}>
              <View style={styles.itemHead}>
                <Text style={styles.itemTitle}>{project.name}</Text>
                <Text style={styles.itemMeta}>{project.context}</Text>
              </View>
              <Text>{project.summary}</Text>
              <Text style={styles.bullet}>• Problem: {project.goal}</Text>
              <Text style={styles.bullet}>
                • Contribution: {project.contribution}
              </Text>
              <Text style={styles.bullet}>• Outcome: {project.outcome}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((item) => (
            <View key={item.school} style={styles.item}>
              <View style={styles.itemHead}>
                <Text style={styles.itemTitle}>{item.school}</Text>
                <Text style={styles.itemMeta}>{item.period}</Text>
              </View>
              <Text>{item.degree}</Text>
              <Text>{item.gpa}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillWrap}>
            {skills
              .flatMap((group) => group.items)
              .slice(0, 20)
              .map((skill) => (
                <Text key={skill} style={styles.skillPill}>
                  {skill}
                </Text>
              ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Publications</Text>
          {publications.map((item) => (
            <View key={item.title} style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemMeta}>
                {item.venue} | {item.year}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
